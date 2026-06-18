let input = prompt('コマンドを入力してください(new,list,delete,quit)');
const todos = []

while (input !== 'quit') {
    if (input === 'new') {
        const newTodo = prompt("Enter new todo");

        todos.push(newTodo);

        console.log(`${newTodo} を追加しました`);
    } else if (input === 'list') {
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
    } else if (input === 'delete') {
        const index = parseInt(prompt("削除したいインデックス番号を入力してください"));
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);


            console.log(`${deleted[0]}を削除しました`);
        } else {
            console.log('有効なindexを入力してください')
        }


    }


    input = prompt('コマンドを入力してください(new,list,delete,quit)');

}

console.log('アプリを終了しました。');