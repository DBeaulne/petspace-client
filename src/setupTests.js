// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

jest.mock('axios', () => {
	const mockApi = {
		get: jest.fn(),
		post: jest.fn(),
		put: jest.fn(),
		patch: jest.fn(),
		interceptors: {
			request: {
				use: jest.fn()
			}
		}
	};

	return {
		create: jest.fn(() => mockApi),
		get: jest.fn(),
		post: jest.fn(),
		put: jest.fn(),
		patch: jest.fn()
	};
});
