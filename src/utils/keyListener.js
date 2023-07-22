const handleKeyDown = e => {

    if (e.metaKey) {
        e.preventDefault();
        if (e.key === 'z') {
            console.log('Undo');
        } else if (e.key === 'y') {
            console.log('Redo');
        } else if (e.key === 's') {
            console.log('저장하기');
        }
    }
};

export {handleKeyDown}