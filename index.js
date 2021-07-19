const readline = require('readline-sync')

function start() {
    const content = {}

    content.searchTerm = askAndReturnSearchTerm()

    function askAndReturnSearchTerm() {
        return readline.question('Digite o que gostaria de pesquisar na Wikipedia: ')
    }

    console.log(content)
}

start()