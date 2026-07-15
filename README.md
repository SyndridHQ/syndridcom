# Syndrid main landing page

Static GitHub Pages site for:

```text
https://syndrid.com
```

This is the parent-brand landing page. The detailed CLI product page remains at:

```text
https://cli.syndrid.com
```

## Fastest way to edit the content

Open:

```text
site-content.js
```

That file controls:

- brand name
- headline
- summary
- button labels
- CLI product text
- CLI destination
- SyndridHQ GitHub destination
- contact email

The package is already configured with:

```text
CLI:     https://cli.syndrid.com
GitHub:  https://github.com/SyndridHQ
Email:   mahmud@syndrid.com
```

## Visual files

- `styles.css` — panel size, terminal styling, colors, spacing, responsive behavior
- `assets/sunset-valley.svg` — editable vector sunset/mountain/lake background
- `site.js` — animated firefly count and placement
- `assets/grain.svg` — subtle texture overlay

## Deploy to the existing repository

Use:

```text
https://github.com/SyndridHQ/syndridcom
```

Replace the old website files with the contents of this package. Upload the files directly to the repository root, not inside another folder.

The included `CNAME` file contains:

```text
syndrid.com
```

## PowerShell deployment

After extracting the ZIP:

```powershell
Set-Location C:\SyndridSites\syndridcom

git pull
Copy-Item "C:\path\to\extracted\*" . -Recurse -Force

git add .
git commit -m "Build minimal Syndrid landing page"
git push origin main
```

GitHub Pages will redeploy automatically.

## Local preview

From the repository folder:

```powershell
python -m http.server 8000
Start-Process "http://localhost:8000"
```
