import js from '@eslint/js';
import svelte from 'eslint-plugin-svelte';
import globals from 'globals';
import svelteConfig from './svelte.config.js';

/** @type {import('eslint').Linter.Config[]} */
export default [
  js.configs.recommended,
  ...svelte.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node // Add this if you are using SvelteKit in non-SPA mode
      }
    }
  },
  {
    files: ['**/*.svelte', '**/*.svelte.js'],
    languageOptions: {
      parserOptions: {
        // We recommend importing and specifying svelte.config.js.
        // By doing so, some rules in eslint-plugin-svelte will automatically read the configuration and adjust their behavior accordingly.
        // While certain Svelte settings may be statically loaded from svelte.config.js even if you don’t specify it,
        // explicitly specifying it ensures better compatibility and functionality.
        svelteConfig
      }
    }
  },
  {
    rules: {
      "@typescript-eslint/no-implicit-any": "error",
      // Override or add rule settings here, such as:
      // 'svelte/rule-name': 'error'
    }
  },
  {
     settings: {
      svelte: {
        // Specifies an array of rules to ignore reports within the template.
        // For example, use this to disable rules in the template that may produce unavoidable false positives.
        ignoreWarnings: [
          '@typescript-eslint/no-unsafe-assignment',
          '@typescript-eslint/no-unsafe-member-access'
        ],
        // Even if settings.svelte.kit is not specified, the rules will attempt to load information from svelte.config.js.
        // However, if the default behavior does not work as expected, you should specify settings.svelte.kit explicitly.
        // If you are using SvelteKit with a non-default configuration, you need to set the following options.
        // The schema is a subset of SvelteKit’s configuration, so refer to the SvelteKit documentation for more details.
        // https://svelte.dev/docs/kit/configuration
        kit: {
          alias: {
            src: 'src',
          }
        }
      }
    }
  }
];