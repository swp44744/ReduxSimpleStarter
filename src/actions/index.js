
export function selectBook(book) {
    //this is an action and it need to return action & object with a proprty
    return {
        type: 'BOOK_SELECTED',
        payload: book

    };
}