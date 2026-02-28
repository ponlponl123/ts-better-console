import { describe, it } from 'bun:test';
import betterconsole from '..';
import { cs } from './line';
import { s } from './style';
import type { StyleOptions } from '../types/style';

describe('ts-better-console', () => {
    it('should apply styles correctly', async () => {
        const styled: StyleOptions = { color: 'red', backgroundColor: 'yellow', styles: ['bold', 'underline'] }
        betterconsole.log(cs([
            s('This is a test with styles ', styled),
            s('✨', { ...styled, backgroundColor: 'cyan' }),
            s('( ͡° ͜ʖ ͡°)_/¯', styled)
        ], false));
    });

    it('should return rainbow colors', async () => {
        const colors = ['red', 'yellow', 'green', 'cyan', 'blue', 'magenta'] as const;
        betterconsole.log(cs(colors.map((color) => s(String(color[0]).toUpperCase().repeat(3), { color })), false));
    });

    it('should return rainbow background colors', async () => {
        const colors = ['red', 'yellow', 'green', 'cyan', 'blue', 'magenta'] as const;
        betterconsole.log(cs(colors.map((color) => s(`   `, { backgroundColor: color })), false));
    });

    it('should return empty string for undefined styles', async () => {
        betterconsole.log(s('No styles', {}));
    });

    it('should handle unknown colors and styles gracefully', async () => {
        // @ts-expect-error - Testing with invalid values
        betterconsole.log(s('Unknown styles', { color: 'unknown', backgroundColor: 'unknown', styles: ['unknown'] }));
    });
});