// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

const goMock = {
	main: {
		App: {
			UserName: jest.fn(() => Promise.resolve({ data: {} })),
			CPUInfo: jest.fn(() => Promise.resolve({ data: {} })),
			HostInfo: jest.fn(() => Promise.resolve({ data: {} })),
			GetSessionTime: jest.fn(() => Promise.resolve({ data: {} })),
			GetWorkTime: jest.fn(() => Promise.resolve({ data: {} }))
		}
	}
};

global.go = goMock;
