module.exports = {
    // The root of your source code, typically /src
    // `<rootDir>` is a token Jest substitutes
    roots: ["<rootDir>/src"],

    testEnvironment: "jsdom",

    globals: {
    },

    // Jest transformations -- this adds support for TypeScript
    // using ts-jest
    transform: {
        '^.+\\.tsx?$': [
            'ts-jest',
            // required due to custom location of tsconfig.json configuration file
            // https://kulshekhar.github.io/ts-jest/docs/getting-started/options/tsconfig
            {
             tsconfig: 'tsconfig.json',
             isolatedModules: true
            },
        ],
    },

    // Runs special logic, such as cleaning up components
    // when using React Testing Library and adds special
    // extended assertions to Jest
    setupFilesAfterEnv: [
        "@testing-library/jest-dom/extend-expect"
    ],
    // Test spec file resolution pattern
    // Matches parent folder `__tests__` and filename
    // should contain `test` or `spec`.
    testRegex: "(/tests/.*|(\\.|/)(test|spec))\\.tsx?$",
    testPathIgnorePatterns: ['/node_modules/', 'mocks', 'dist'],
    coveragePathIgnorePatterns: [
        "mocks"
    ],
    // Module file extensions for importing
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],

    moduleNameMapper: {
        "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/mocks/fileMock.ts",
        "\\.(css|scss)$": "identity-obj-proxy"
    }
};

export {}
