class SPARCCommandGenerator {
    constructor() {
        this.config = {
            projectName: 'sparc-project',
            readmePath: 'README.md',
            developmentMode: 'full',
            skipTests: false,
            coverageTarget: 100,
            parallelExecution: true,
            skipResearch: false,
            researchDepth: 'standard',
            commitFrequency: 'phase',
            outputFormat: 'text',
            verbose: false,
            dryRun: false
        };
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.updateDisplay();
    }
    
    setupEventListeners() {
        // Basic settings
        document.getElementById('project-name').addEventListener('input', (e) => {
            this.config.projectName = e.target.value || 'sparc-project';
            this.updateDisplay();
        });
        
        document.getElementById('readme-path').addEventListener('input', (e) => {
            this.config.readmePath = e.target.value || 'README.md';
            this.updateDisplay();
        });
        
        // Development options
        document.getElementById('development-mode').addEventListener('change', (e) => {
            this.config.developmentMode = e.target.value;
            this.updateDisplay();
        });
        
        document.getElementById('skip-tests').addEventListener('change', (e) => {
            this.config.skipTests = e.target.checked;
            this.updateDisplay();
        });
        
        document.getElementById('coverage-target').addEventListener('input', (e) => {
            this.config.coverageTarget = parseInt(e.target.value);
            document.getElementById('coverage-value').textContent = `${e.target.value}%`;
            this.updateDisplay();
        });
        
        document.getElementById('parallel-execution').addEventListener('change', (e) => {
            this.config.parallelExecution = e.target.checked;
            this.updateDisplay();
        });
        
        // Research options
        document.getElementById('skip-research').addEventListener('change', (e) => {
            this.config.skipResearch = e.target.checked;
            this.updateDisplay();
        });
        
        document.getElementById('research-depth').addEventListener('change', (e) => {
            this.config.researchDepth = e.target.value;
            this.updateDisplay();
        });
        
        // Commit options
        document.getElementById('commit-frequency').addEventListener('change', (e) => {
            this.config.commitFrequency = e.target.value;
            this.updateDisplay();
        });
        
        // Output options
        document.getElementById('output-format').addEventListener('change', (e) => {
            this.config.outputFormat = e.target.value;
            this.updateDisplay();
        });
        
        document.getElementById('verbose').addEventListener('change', (e) => {
            this.config.verbose = e.target.checked;
            this.updateDisplay();
        });
        
        document.getElementById('dry-run').addEventListener('change', (e) => {
            this.config.dryRun = e.target.checked;
            this.updateDisplay();
        });
        
        // Control buttons
        document.getElementById('copy-command').addEventListener('click', () => {
            this.copyCommand();
        });
        
        document.getElementById('copy-prompt').addEventListener('click', () => {
            this.copyPrompt();
        });
        
        document.getElementById('expand-all').addEventListener('click', () => {
            this.expandAllSections();
        });
        
        document.getElementById('collapse-all').addEventListener('click', () => {
            this.collapseAllSections();
        });
    }
    
    generateCommand() {
        let command = './claude-sparc.sh';
        
        // Add flags
        const flags = [];
        
        if (this.config.verbose) flags.push('--verbose');
        if (this.config.dryRun) flags.push('--dry-run');
        if (this.config.skipResearch) flags.push('--skip-research');
        if (this.config.skipTests) flags.push('--skip-tests');
        if (!this.config.parallelExecution) flags.push('--no-parallel');
        
        if (this.config.developmentMode !== 'full') {
            flags.push(`--mode ${this.config.developmentMode}`);
        }
        
        if (this.config.researchDepth !== 'standard') {
            flags.push(`--research-depth ${this.config.researchDepth}`);
        }
        
        if (this.config.coverageTarget !== 100) {
            flags.push(`--coverage ${this.config.coverageTarget}`);
        }
        
        if (this.config.commitFrequency !== 'phase') {
            flags.push(`--commit-freq ${this.config.commitFrequency}`);
        }
        
        if (this.config.outputFormat !== 'text') {
            flags.push(`--output ${this.config.outputFormat}`);
        }
        
        if (flags.length > 0) {
            command += ' ' + flags.join(' ');
        }
        
        // Add positional arguments
        if (this.config.projectName !== 'sparc-project') {
            command += ` ${this.config.projectName}`;
        }
        
        if (this.config.readmePath !== 'README.md') {
            command += ` ${this.config.readmePath}`;
        }
        
        return command;
    }
    
    generatePrompt() {
        const config = this.config;
        
        let prompt = `# SPARC Automated Development System
# Project: ${config.projectName}
# Initial Research Document: ${config.readmePath}
# Configuration: Mode=${config.developmentMode}, Coverage=${config.coverageTarget}%, Parallel=${config.parallelExecution}

`;
        
        // Research Phase (conditional)
        if (!config.skipResearch) {
            prompt += this.generateResearchSection();
        }
        
        // Specification Phase
        prompt += this.generateSpecificationSection();
        
        // Pseudocode Phase
        prompt += this.generatePseudocodeSection();
        
        // Architecture Phase
        prompt += this.generateArchitectureSection();
        
        // Refinement Phase
        prompt += this.generateRefinementSection();
        
        // Completion Phase
        prompt += this.generateCompletionSection();
        
        // SPARC Methodology
        prompt += this.generateMethodologySection();
        
        // Success Criteria
        prompt += this.generateSuccessCriteriaSection();
        
        return prompt;
    }
    
    generateResearchSection() {
        const config = this.config;
        const executionType = config.parallelExecution ? 'BatchTool execution' : 'Sequential execution';
        
        return this.createCollapsibleSection('research', 'PHASE 0: COMPREHENSIVE RESEARCH & DISCOVERY', `
### Research Depth: ${config.researchDepth}
### Parallel Web Research Phase (${executionType}):

1. **Domain Research**:
   - WebFetchTool: Extract key concepts from ${config.readmePath}
   - WebFetchTool: Search for latest industry trends and technologies
   - WebFetchTool: Research competitive landscape and existing solutions
   ${config.researchDepth === 'comprehensive' ? '   - WebFetchTool: Gather academic papers and technical documentation' : ''}

2. **Technology Stack Research**:
   - WebFetchTool: Research best practices for identified technology domains
   - WebFetchTool: Search for framework comparisons and recommendations
   - WebFetchTool: Investigate security considerations and compliance requirements
   ${config.researchDepth !== 'basic' ? '   - WebFetchTool: Research scalability patterns and architecture approaches' : ''}

3. **Implementation Research**:
   - WebFetchTool: Search for code examples and implementation patterns
   ${!config.skipTests ? '   - WebFetchTool: Research testing frameworks and methodologies' : ''}
   - WebFetchTool: Investigate deployment and DevOps best practices
   ${config.researchDepth === 'comprehensive' ? '   - WebFetchTool: Research monitoring and observability solutions' : ''}

### Research Processing:
${config.parallelExecution ? 'Use BatchTool to execute all research queries in parallel for maximum efficiency.' : 'Execute research queries sequentially for thorough analysis.'}

${config.commitFrequency !== 'manual' ? "**Commit**: 'feat: complete comprehensive research phase - gathered domain knowledge, technology insights, and implementation patterns'" : ''}

`);
    }
    
    generateSpecificationSection() {
        const config = this.config;
        
        return this.createCollapsibleSection('specification', 'SPECIFICATION PHASE', `
### Requirements Analysis for ${config.developmentMode} development:
1. **Functional Requirements**:
   - Analyze ${config.readmePath} to extract core functionality
   - Define user stories and acceptance criteria
   - Identify system boundaries and interfaces
   ${config.developmentMode === 'full' || config.developmentMode === 'backend-only' || config.developmentMode === 'api-only' ? '   - Specify API endpoints and data models' : ''}
   ${config.developmentMode === 'full' || config.developmentMode === 'frontend-only' ? '   - Define user interface requirements and user experience flows' : ''}

2. **Non-Functional Requirements**:
   - Security and compliance requirements
   - Performance benchmarks and SLAs
   - Scalability and availability targets
   - Maintainability and extensibility goals

3. **Technical Constraints**:
   - Technology stack decisions based on research
   - Integration requirements and dependencies
   - Deployment and infrastructure constraints
   - Budget and timeline considerations

${config.commitFrequency === 'phase' ? `**Commit**: 'docs: complete specification phase - defined functional/non-functional requirements and technical constraints for ${config.developmentMode} development'` : ''}

`);
    }
    
    generatePseudocodeSection() {
        const config = this.config;
        
        let testStrategy = '';
        if (!config.skipTests) {
            testStrategy = `
3. **Test Strategy**:
   - Unit testing approach (TDD London School)
   - Integration testing strategy
   - End-to-end testing scenarios
   - Target: ${config.coverageTarget}% test coverage
   ${config.developmentMode === 'full' ? '   - Frontend and backend testing coordination' : ''}`;
        }
        
        return this.createCollapsibleSection('pseudocode', 'PSEUDOCODE PHASE', `
### High-Level Architecture Design for ${config.developmentMode}:
1. **System Architecture**:
   ${config.developmentMode === 'full' || config.developmentMode === 'backend-only' ? '   - Define backend components and their responsibilities' : ''}
   ${config.developmentMode === 'full' || config.developmentMode === 'frontend-only' ? '   - Design frontend architecture and component hierarchy' : ''}
   ${config.developmentMode === 'api-only' ? '   - Define API architecture and endpoint structure' : ''}
   - Design data flow and communication patterns
   - Specify APIs and integration points
   - Plan error handling and recovery strategies

2. **Algorithm Design**:
   - Core business logic algorithms
   - Data processing and transformation logic
   - Optimization strategies and performance considerations
   - Security and validation algorithms
${testStrategy}

${config.commitFrequency === 'phase' ? `**Commit**: 'design: complete pseudocode phase - defined system architecture, algorithms, and test strategy for ${config.developmentMode}'` : ''}

`);
    }
    
    generateArchitectureSection() {
        const config = this.config;
        
        let dataArchitecture = '';
        if (config.developmentMode === 'full' || config.developmentMode === 'backend-only' || config.developmentMode === 'api-only') {
            dataArchitecture = `
2. **Data Architecture**:
   - Database schema design
   - Data access patterns and repositories
   - Caching strategies and data flow
   - Backup and recovery procedures`;
        }
        
        return this.createCollapsibleSection('architecture', 'ARCHITECTURE PHASE', `
### Detailed System Design for ${config.developmentMode}:
1. **Component Architecture**:
   - Detailed component specifications
   - Interface definitions and contracts
   - Dependency injection and inversion of control
   - Configuration management strategy
${dataArchitecture}

3. **Infrastructure Architecture**:
   - Deployment architecture and environments
   - CI/CD pipeline design
   - Monitoring and logging architecture
   - Security architecture and access controls

${config.commitFrequency === 'phase' ? `**Commit**: 'arch: complete architecture phase - detailed component, data, and infrastructure design for ${config.developmentMode}'` : ''}

`);
    }
    
    generateRefinementSection() {
        const config = this.config;
        const executionType = config.parallelExecution ? 'Parallel' : 'Sequential';
        
        let backendTrack = '';
        if (config.developmentMode === 'full' || config.developmentMode === 'backend-only' || config.developmentMode === 'api-only') {
            const tddSection = !config.skipTests ? `
2. **TDD Core Components** (London School):
   - Red: Write failing tests for core business logic
   - Green: Implement minimal code to pass tests
   - Refactor: Optimize while maintaining green tests
   - Target: ${config.coverageTarget}% coverage
   ${config.commitFrequency !== 'manual' ? `   - **Commit**: 'feat: implement core business logic with TDD - ${config.coverageTarget}% test coverage'` : ''}` : '';
            
            const apiTestStrategy = !config.skipTests ? 'Red: Write API contract tests' : 'Implement API endpoints';
            const apiGreenStrategy = !config.skipTests ? 'Green: Implement API endpoints' : 'Add input validation and error handling';
            const apiRefactorStrategy = !config.skipTests ? 'Refactor: Optimize API performance' : 'Optimize API performance';
            const apiCommitMessage = !config.skipTests ? 'comprehensive test coverage' : 'validation and error handling';
            
            backendTrack = `
#### Track 1: Backend Development
1. **Setup & Infrastructure**:
   - Bash: Initialize project structure
   - Bash: Setup development environment
   - Bash: Configure CI/CD pipeline
   ${config.commitFrequency !== 'manual' ? "   - **Commit**: 'feat: initialize backend infrastructure and development environment'" : ''}
${tddSection}

3. **API Layer Development**:
   - ${apiTestStrategy}
   - ${apiGreenStrategy}
   - ${apiRefactorStrategy}
   ${config.commitFrequency !== 'manual' ? `   - **Commit**: 'feat: complete API layer with ${apiCommitMessage}'` : ''}`;
        }
        
        let frontendTrack = '';
        if (config.developmentMode === 'full' || config.developmentMode === 'frontend-only') {
            const uiTestStrategy = !config.skipTests ? 'Red: Write component tests' : 'Implement UI components';
            const uiGreenStrategy = !config.skipTests ? 'Green: Implement UI components' : 'Add component styling and interactions';
            const uiRefactorStrategy = !config.skipTests ? 'Refactor: Optimize for reusability' : 'Optimize for reusability and performance';
            const uiCommitMessage = !config.skipTests ? 'full test coverage' : 'optimized components';
            
            const appTestStrategy = !config.skipTests ? 'Red: Write application flow tests' : 'Implement user interactions';
            const appGreenStrategy = !config.skipTests ? 'Green: Implement user interactions' : 'Add state management and routing';
            const appRefactorStrategy = !config.skipTests ? 'Refactor: Optimize user experience' : 'Optimize user experience and performance';
            const appCommitMessage = !config.skipTests ? 'end-to-end tests' : 'optimized user experience';
            
            frontendTrack = `
#### Track 2: Frontend Development
1. **UI Component Library**:
   - ${uiTestStrategy}
   - ${uiGreenStrategy}
   - ${uiRefactorStrategy}
   ${config.commitFrequency !== 'manual' ? `   - **Commit**: 'feat: complete UI component library with ${uiCommitMessage}'` : ''}

2. **Application Logic**:
   - ${appTestStrategy}
   - ${appGreenStrategy}
   - ${appRefactorStrategy}
   ${config.commitFrequency !== 'manual' ? `   - **Commit**: 'feat: complete frontend application logic with ${appCommitMessage}'` : ''}`;
        }
        
        const batchTool = config.parallelExecution ? 'BatchTool: Run parallel integration test suites' : 'Bash: Run integration test suites';
        const qualityBatchTool = config.parallelExecution ? 'BatchTool: Run parallel quality checks (linting, analysis, documentation)' : 'Bash: Run comprehensive linting and code quality analysis';
        const orchestrationStrategy = config.parallelExecution ? 'Use BatchTool to execute independent development tracks in parallel where possible.' : 'Execute development tracks sequentially for thorough validation.';
        
        return this.createCollapsibleSection('refinement', 'REFINEMENT PHASE (TDD Implementation)', `
### ${executionType} Development Tracks for ${config.developmentMode}:
${backendTrack}
${frontendTrack}

#### Track 3: Integration & Quality Assurance
1. **Integration Testing**:
   - ${batchTool}
   - Bash: Execute performance benchmarks
   - Bash: Run security scans and audits
   ${config.commitFrequency !== 'manual' ? "   - **Commit**: 'test: complete integration testing with performance and security validation'" : ''}

2. **Quality Gates**:
   - ${qualityBatchTool}
   - Bash: Validate documentation completeness
   ${config.commitFrequency !== 'manual' ? "   - **Commit**: 'quality: pass all quality gates - linting, analysis, and documentation'" : ''}

### ${executionType} Subtask Orchestration:
${orchestrationStrategy}

`);
    }
    
    generateCompletionSection() {
        const config = this.config;
        const testValidation = !config.skipTests ? '   - Run comprehensive end-to-end tests' : '';
        const apiDocumentation = (config.developmentMode === 'api-only' || config.developmentMode === 'backend-only' || config.developmentMode === 'full') ? '   - Generate comprehensive API documentation' : '';
        
        return this.createCollapsibleSection('completion', 'COMPLETION PHASE', `
### Final Integration & Deployment for ${config.developmentMode}:
1. **System Integration**:
   - Integrate all development tracks
${testValidation}
   - Validate against original requirements
   ${config.commitFrequency !== 'manual' ? "   - **Commit**: 'feat: complete system integration with full validation'" : ''}

2. **Documentation & Deployment**:
${apiDocumentation}
   - Create deployment guides and runbooks
   - Setup monitoring and alerting
   ${config.commitFrequency !== 'manual' ? "   - **Commit**: 'docs: complete documentation and deployment preparation'" : ''}

3. **Production Readiness**:
   - Execute production deployment checklist
   - Validate monitoring and observability
   - Conduct final security review
   ${config.commitFrequency !== 'manual' ? "   - **Commit**: 'deploy: production-ready release with full monitoring and security validation'" : ''}

`);
    }
    
    generateMethodologySection() {
        const config = this.config;
        const testingStandard = !config.skipTests ? `- **Testing**: ${config.coverageTarget}% test coverage with TDD London School approach` : '';
        const webFetchTool = !config.skipResearch ? '- **WebFetchTool**: Comprehensive research and documentation gathering' : '';
        const batchTool = config.parallelExecution ? '- **BatchTool**: Parallel research, testing, and quality checks' : '';
        const dispatchAgent = config.parallelExecution ? '- **dispatch_agent**: Complex subtask delegation' : '';
        const testCommit = !config.skipTests ? '- **test**: Test implementation and coverage improvements' : '';
        
        const executionStrategy = config.parallelExecution ? `
1. Use BatchTool for independent operations
2. Leverage dispatch_agent for complex subtasks
3. Implement concurrent development tracks
4. Optimize for maximum development velocity` : `
1. Execute operations sequentially for thorough validation
2. Focus on quality over speed
3. Ensure each step is fully validated before proceeding
4. Maintain clear development progression`;
        
        const executionType = config.parallelExecution ? 'Parallel' : 'Sequential';
        
        const continuousIntegration = config.commitFrequency !== 'manual' ? `- Commit after each ${config.commitFrequency === 'phase' ? 'major phase' : 'feature'} completion` : '';
        const automatedTests = !config.skipTests ? '- Run automated tests on every commit' : '';
        
        return this.createCollapsibleSection('methodology', 'SPARC METHODOLOGY ENFORCEMENT', `
### Quality Standards:
- **Modularity**: All files ≤ 500 lines, functions ≤ 50 lines
- **Security**: No hardcoded secrets, comprehensive input validation
${testingStandard}
- **Documentation**: Self-documenting code with strategic comments
- **Performance**: Optimized critical paths with benchmarking

### Tool Utilization Strategy:
${webFetchTool}
${batchTool}
- **Bash**: Git operations, CI/CD, testing, and deployment
- **Edit/Replace**: Code implementation and refactoring
- **GlobTool/GrepTool**: Code analysis and pattern detection
${dispatchAgent}

### Commit Standards (Frequency: ${config.commitFrequency}):
- **feat**: New features and major functionality
${testCommit}
- **fix**: Bug fixes and issue resolution
- **docs**: Documentation updates and improvements
- **arch**: Architectural changes and design updates
- **quality**: Code quality improvements and refactoring
- **deploy**: Deployment and infrastructure changes

### ${executionType} Execution Strategy:
${executionStrategy}

### Continuous Integration:
${continuousIntegration}
${automatedTests}
- Validate quality gates continuously
- Monitor performance and security metrics

`);
    }
    
    generateSuccessCriteriaSection() {
        const config = this.config;
        const testCriteria = !config.skipTests ? `- ✅ ${config.coverageTarget}% test coverage achieved` : '';
        const parallelExecution = config.parallelExecution ? 'Use parallel execution and subtask orchestration for maximum efficiency.' : '';
        const commitStrategy = config.commitFrequency !== 'manual' ? `Commit after each ${config.commitFrequency === 'phase' ? 'phase' : 'feature'} with detailed messages.` : '';
        
        return this.createCollapsibleSection('success', 'SUCCESS CRITERIA', `
${testCriteria}
- ✅ All quality gates passed
- ✅ Production deployment successful
- ✅ Comprehensive documentation complete
- ✅ Security and performance validated
- ✅ Monitoring and observability operational

Continue development until all success criteria are met. ${parallelExecution} ${commitStrategy} Display '<SPARC-COMPLETE>' when the entire development lifecycle is finished.

`);
    }
    
    createCollapsibleSection(id, title, content) {
        return `<div class="collapsible-section" data-section="${id}">
    <div class="section-header" onclick="toggleSection('${id}')">
        <span class="section-title">## ${title}</span>
        <span class="toggle-icon">▼</span>
    </div>
    <div class="section-content" id="section-${id}">
${content.trim()}
    </div>
</div>

`;
    }
    
    updateDisplay() {
        document.getElementById('generated-command').textContent = this.generateCommand();
        document.getElementById('prompt-content').innerHTML = this.generatePrompt();
    }
    
    copyCommand() {
        const command = this.generateCommand();
        navigator.clipboard.writeText(command).then(() => {
            this.showNotification('Command copied to clipboard!');
        });
    }
    
    copyPrompt() {
        const prompt = this.generatePrompt().replace(/<[^>]*>/g, ''); // Remove HTML tags
        navigator.clipboard.writeText(prompt).then(() => {
            this.showNotification('Prompt copied to clipboard!');
        });
    }
    
    expandAllSections() {
        document.querySelectorAll('.collapsible-section').forEach(section => {
            section.classList.add('expanded');
        });
    }
    
    collapseAllSections() {
        document.querySelectorAll('.collapsible-section').forEach(section => {
            section.classList.remove('expanded');
        });
    }
    
    showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }
}

// Global function for toggling sections
function toggleSection(sectionId) {
    const section = document.querySelector(`[data-section="${sectionId}"]`);
    section.classList.toggle('expanded');
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    new SPARCCommandGenerator();
});