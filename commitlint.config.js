const { rules } = require("@commitlint/config-conventional");

module.exports = {
    extends: [
        '@commitlint/config-conventional'
    ],
    rules: {
        //0-disables the rules, 1-warning, 2-error
        'type-enum': [
            2,
            'always',
            [
                'feat',
                'bug',
                'chore'
            ]
        ],
        'subject-case': [
            2,
            'never',
            ['sentence-case', 'start-case', 'pascal-case', 'upper-case']
        ],
        'subject-empty': [
            2,
            'never'
        ]
    }
}