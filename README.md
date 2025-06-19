# SPARC Command Generator - Web GUI

A web-based interface for configuring and generating SPARC (Specification, Pseudocode, Architecture, Refinement, Completion) automated development workflows.

## Overview

This GUI provides a visual interface for the `claude-sparc.sh` script, allowing you to:

- Configure all SPARC development options through an intuitive form
- Preview the generated prompt in real-time
- Generate the exact command line to execute
- Copy commands and prompts to clipboard
- Collapse/expand sections for focused viewing

## Features

### Configuration Panel

**Basic Settings**
- **Project Name**: Name of your development project
- **README Path**: Path to your requirements or initial documentation file

**Development Options**
- **Development Mode**: Choose from full-stack, backend-only, frontend-only, or API-only development
- **Skip Tests**: Option to skip test development (not recommended)
- **Test Coverage Target**: Set desired test coverage percentage (0-100%)
- **Parallel Execution**: Enable/disable parallel development tracks

**Research Options**
- **Skip Research**: Bypass the web research phase
- **Research Depth**: Choose from basic, standard, or comprehensive research levels

**Commit Options**
- **Commit Frequency**: Set when to make automatic commits (phase, feature, or manual)

**Output Options**
- **Output Format**: Choose text, JSON, or markdown output
- **Verbose Output**: Enable detailed logging
- **Dry Run**: Preview what would be executed without running

### Prompt Preview Panel

- **Real-time Generation**: Prompt updates automatically as you change settings
- **Collapsible Sections**: Click section headers to expand/collapse content
- **Expand/Collapse All**: Buttons to quickly show or hide all sections
- **Copy Functionality**: Copy the entire prompt to clipboard

### Command Generation

- **Live Command**: Generated command updates in real-time
- **Copy Command**: One-click copying of the complete shell command
- **Syntax Highlighting**: Monospace font for better readability

## Usage

1. **Open the Interface**: Open `index.html` in your web browser
2. **Configure Settings**: Adjust options in the left panel according to your project needs
3. **Preview Prompt**: Review the generated SPARC prompt in the right panel
4. **Generate Command**: Copy the generated command from the bottom of the configuration panel
5. **Execute**: Run the command in your terminal where `claude-sparc.sh` is available

## File Structure

```
sparc-test/
├── index.html          # Main HTML interface
├── script.js           # JavaScript for prompt generation and interactivity
├── style.css           # CSS styling with responsive design
├── claude-sparc.sh     # Original SPARC shell script
└── README.md           # This documentation
```

## SPARC Phases

The generated prompt includes all standard SPARC phases:

1. **Phase 0: Research & Discovery** (optional)
   - Domain research and competitive analysis
   - Technology stack investigation
   - Implementation pattern research

2. **Specification Phase**
   - Functional and non-functional requirements
   - Technical constraints analysis
   - System boundary definition

3. **Pseudocode Phase**
   - High-level architecture design
   - Algorithm specification
   - Test strategy planning

4. **Architecture Phase**
   - Detailed component design
   - Data architecture (for backend/full modes)
   - Infrastructure planning

5. **Refinement Phase (TDD Implementation)**
   - Parallel development tracks
   - Test-driven development
   - Quality assurance integration

6. **Completion Phase**
   - System integration
   - Documentation and deployment
   - Production readiness validation

## Development Modes

- **Full**: Complete full-stack development with frontend and backend
- **Backend Only**: Server-side services and APIs only
- **Frontend Only**: Client-side application development
- **API Only**: REST/GraphQL API development focus

## Research Depths

- **Basic**: Quick domain overview and technology identification
- **Standard**: Comprehensive analysis with competitive research
- **Comprehensive**: Extensive research including academic papers

## Commit Frequencies

- **Phase**: Commit after each major SPARC phase completion
- **Feature**: Commit after each individual feature implementation
- **Manual**: No automatic commits (manual git operations only)

## Browser Compatibility

- Modern browsers with ES6+ support
- Chrome 80+, Firefox 75+, Safari 13+, Edge 80+
- Responsive design works on mobile devices

## Keyboard Shortcuts

- `Ctrl/Cmd + C`: Copy focused content
- Click section headers to toggle collapse/expand
- Form inputs support standard keyboard navigation

## Tips

1. **Start with Standard Settings**: Default configuration works well for most projects
2. **Use Collapsible Sections**: Focus on relevant parts by collapsing others
3. **Preview Before Executing**: Always review the generated prompt
4. **Save Configurations**: Bookmark the page or save settings for reuse
5. **Mobile Friendly**: Interface adapts to smaller screens

## Troubleshooting

**Command not working?**
- Ensure `claude-sparc.sh` is executable: `chmod +x claude-sparc.sh`
- Check that all required dependencies are installed
- Verify file paths are correct

**Prompt too long?**
- Use collapsible sections to focus on relevant parts
- Consider reducing research depth or skipping research phase
- Adjust development mode to focus on specific areas

**Copy not working?**
- Ensure your browser supports the Clipboard API
- Try using keyboard shortcuts as fallback
- Check browser permissions for clipboard access

## License

This GUI complements the SPARC automated development system. Use according to your project's license requirements.

---

*Generated with the SPARC methodology for comprehensive software development*