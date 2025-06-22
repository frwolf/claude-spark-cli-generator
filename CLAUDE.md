# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a web-based GUI for the SPARC (Specification, Pseudocode, Architecture, Refinement, Completion) Automated Development System. It provides a visual interface for configuring and generating SPARC development workflows.

## Core Architecture

### Primary Components

- **index.html**: Main HTML interface with form-based configuration panel and prompt preview
- **script.js**: JavaScript application logic using ES6 class-based architecture (`SPARCCommandGenerator`)
- **style.css**: Responsive CSS with gradient backgrounds and grid-based layout
- **claude-sparc.sh**: Core bash script that executes the SPARC methodology with Claude AI
- **README.md**: Comprehensive documentation of features and usage

### Key Architecture Patterns

- **Configuration-driven**: All settings stored in `this.config` object and synchronized with DOM
- **Real-time updates**: Prompt and command generation updates automatically on configuration changes
- **Modular sections**: Collapsible/expandable sections for focused viewing
- **Responsive design**: Grid-based layout that adapts to different screen sizes

## Core Script Functionality

The `claude-sparc.sh` script is the heart of the system:

- **Argument parsing**: Extensive CLI argument handling with validation
- **Dynamic prompt generation**: Builds complex SPARC prompts based on configuration
- **Tool orchestration**: Configures Claude AI with appropriate tools (WebFetch, Bash, etc.)
- **Development modes**: Supports full, backend-only, frontend-only, and api-only development
- **Parallel execution**: Can enable/disable parallel development tracks

## Key Configuration Options

### Development Modes

- `full`: Complete full-stack development
- `backend-only`: Server-side services and APIs only
- `frontend-only`: Client-side application development
- `api-only`: REST/GraphQL API development focus

### Research Depths

- `basic`: Quick domain overview
- `standard`: Comprehensive analysis (default)
- `comprehensive`: Extensive research including academic papers

### Commit Frequencies

- `phase`: Commit after each SPARC phase
- `feature`: Commit after each feature
- `manual`: No automatic commits

## Development Commands

### Running the Application

```bash
# Open in browser
open index.html
# or
python -m http.server 8000  # for local server
```

### Testing the Shell Script

```bash
# Make executable
chmod +x claude-sparc.sh

# Basic usage
./claude-sparc.sh my-project requirements.md

# Dry run to preview
./claude-sparc.sh --dry-run --verbose my-project requirements.md
```

## JavaScript Architecture

The main `SPARCCommandGenerator` class handles:

- **Configuration management**: Centralized config object with DOM synchronization
- **Event handling**: Comprehensive form input listeners
- **Prompt generation**: Dynamic SPARC prompt building based on configuration
- **Command generation**: Real-time shell command construction
- **UI interactions**: Collapsible sections, copy functionality, expand/collapse controls

## SPARC Methodology Implementation

The system implements a 6-phase development approach:

1. **Phase 0**: Research & Discovery (optional)
2. **Specification**: Requirements analysis
3. **Pseudocode**: High-level design
4. **Architecture**: Detailed system design
5. **Refinement**: TDD implementation with parallel tracks
6. **Completion**: Integration and deployment

## Important Integration Points

- **Claude AI Integration**: Script uses `claude` CLI with specific tool configurations
- **MCP Support**: Optional MCP configuration file support
- **Git Integration**: Automatic commit functionality with conventional commit messages
- **Tool Orchestration**: Dynamic tool selection based on configuration (WebFetch, Bash, BatchTool, etc.)

## File Structure Conventions

- Static files (HTML, CSS, JS) for the web interface
- Shell script for the core SPARC execution logic
- Configuration-driven approach allows easy customization
- Responsive design patterns for cross-device compatibility
