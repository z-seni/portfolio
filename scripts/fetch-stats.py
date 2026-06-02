import json, re, subprocess, sys
from datetime import datetime, timezone

with open('js/video-data.js', 'r') as f:
    content = f.read()

urls = re.findall(r'url:\s*"(https://www\.instagram\.com/[^"]+)"', content)
print(f"Found {len(urls)} Instagram URLs")

try:
    with open('js/video-stats.json', 'r') as f:
        stats = json.load(f)
except FileNotFoundError:
    stats = {}

for url in urls:
    try:
        result = subprocess.run(
            ['yt-dlp', '--dump-json', '--skip-download', url],
            capture_output=True, text=True, timeout=30
        )
        if result.returncode == 0:
            data = json.loads(result.stdout)
            count = data.get('like_count') or 0
            stats[url] = count
            print(f"  OK  {count:>8,} likes  {url}")
        else:
            print(f"  ERR          {url}")
    except Exception as e:
        print(f"  EXC {e}  {url}")

stats['_updated'] = datetime.now(timezone.utc).strftime('%Y-%m-%dT%H:%M:%SZ')

with open('js/video-stats.js', 'w') as f:
    f.write('const VIDEO_STATS = ' + json.dumps(stats, indent=2) + ';\n')

print(f"\nDone. Stats saved to js/video-stats.js")
