/// <reference types="vitest" />
import { defineConfig } from 'vite';

export default defineConfig({
    test: {
        globals: true,
        pool: 'forks',
        poolOptions: {
            threads: {
                minThreads: 1,
                maxThreads: 1,
                singleThread: true,
            },
            forks: {
                minForks: 1,
                maxForks: 1,
                singleFork: true,
            },
        },
        minWorkers: 1,
        maxWorkers: 1,
        fileParallelism: false,
        sequence: {
            concurrent: false,
            shuffle: true,
            hooks: 'stack',
        },
        allowOnly: true,
    },
});
