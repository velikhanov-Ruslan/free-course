import { classNames } from './index';

describe('classNames', () => {
    test('cls with params', () => {
        expect(classNames('someClass', {}, ['azzz'])).toBe('someClass azzz');
    });
});
