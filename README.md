# Sideloading Docs

## Installation

```bash
# Clone the repository
git clone https://github.com/NeoSigniOS/wiki
cd wiki

# Install dependencies
npm install
```

## Development

```bash
# Start development server
npm run docs:dev

# Start with network access (for testing on other devices)
npm run docs:dev -- --host
```

The site will be available at `http://localhost:5173/`

## Building

```bash
# Build for production
npm run docs:build

# Preview production build
npm run docs:preview
```

## Deployment

### GitHub Pages

This site is configured for GitHub Pages deployment. To deploy:

1. **Enable GitHub Pages** in your repository settings
2. **Set source** to "GitHub Actions" 
3. **Push to main branch** - The site will automatically deploy using the included workflow

### Other Platforms

- **Netlify**: Connect your repo and set build command to `npm run docs:build` and publish directory to `docs/.vitepress/dist`
- **Vercel**: Import project and it will auto-detect VitePress configuration

## Project Structure

```
├── docs/
│   ├── .vitepress/
│   │   └── config.mjs          # VitePress configuration
│   ├── guide/                  # Documentation pages
│   └── index.md               # Homepage
├── package.json
└── README.md
```

## Configuration

VitePress configuration is located in `docs/.vitepress/config.mjs`. You can customize:

- Site metadata (title, description)
- Navigation and sidebar
- Theme settings
- Plugins and extensions

## Writing Content

- Create `.md` files in the `docs/` directory
- Use frontmatter for page configuration
- Leverage Vue components in Markdown
- Organize content with folders for better structure

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally with `npm run docs:dev`
5. Submit a pull request

## License

ISC License - see package.json for details

## Links

- [VitePress Documentation](https://vitepress.dev/)
- [Markdown Guide](https://www.markdownguide.org/)
- [Vue.js](https://vuejs.org/) 