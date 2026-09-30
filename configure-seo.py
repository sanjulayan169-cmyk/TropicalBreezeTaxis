"""Run with the actual public URL after choosing your GitHub Pages repository."""
from pathlib import Path
from urllib.parse import urlparse
from html import escape
import re,sys
root=Path(__file__).resolve().parent
if len(sys.argv)!=2:raise SystemExit('Usage: python configure-seo.py https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/')
base=sys.argv[1].rstrip('/')+'/'
u=urlparse(base)
if u.scheme!='https' or not u.hostname or u.query or u.fragment or 'YOUR-' in base:raise SystemExit('Provide your real HTTPS website URL, without a query or fragment.')
urls=[]
for file in sorted(root.rglob('index.html')):
 route=file.parent.relative_to(root).as_posix()
 url=base+('' if route=='.' else route+'/')
 content=file.read_text(encoding='utf-8')
 content=re.sub(r'<link\b[^>]*rel=["\']canonical["\'][^>]*>','',content)
 content=content.replace('</head>',f'<link rel="canonical" href="{escape(url,quote=True)}"></head>')
 file.write_text(content,encoding='utf-8');urls.append(url)
(root/'sitemap.xml').write_text('<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+''.join('<url><loc>'+escape(url)+'</loc></url>' for url in urls)+'</urlset>',encoding='utf-8')
(root/'robots.txt').write_text('User-agent: *\nAllow: /\nSitemap: '+base+'sitemap.xml\n',encoding='utf-8')
print('Configured canonical URLs and sitemap for',len(urls),'pages.')
