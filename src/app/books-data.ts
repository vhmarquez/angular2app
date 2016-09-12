import { Books } from './books';

export const BOOKS: Books[] = [];

var addItem = function(type, title, author, imageUri) {
    BOOKS.push({
        type: type,
        title: title,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut tincidunt nunc. Nam porta diam in elit condimentum gravida. In eu mi ut lacus gravida elementum vehicula eu elit. Curabitur tristique sed tortor at eleifend. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris pulvinar nulla orci, quis sollicitudin lorem aliquet id. Mauris in malesuada sem, eget dapibus diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse porttitor rhoncus lorem, non tempor justo blandit vitae. Proin quis nulla molestie, tempus mi ac, rutrum nulla. Etiam sit amet mattis odio. Sed in elementum diam, id hendrerit libero. Sed id risus vel ipsum dignissim pulvinar et in turpis. Cras tempor vestibulum porttitor. Etiam tincidunt imperdiet tellus id interdum. Suspendisse facilisis felis nibh.',
        author: author,
        imageUri: '/images/products/' + imageUri,
        price: Math.floor(Math.random() * 20000) / 100
    });
};

addItem('book', 'Hyperbole and a Half', 'Allie Brosh', 'brosh.jpg');
addItem('book', 'Purely Functional Data Structures', 'Chris Okasaki', 'okasaki.jpg');
addItem('book', 'Lord of the Rings', 'J. R. R. Tolkien', 'tolkien.jpg');
addItem('book', 'A Game of Thrones', 'George R. R. Martin', 'martin.jpg');
addItem('book', 'Grimm Fairy Tales', 'The Brothers Grimm', 'grimm.jpg');
addItem('book', 'Geek Love', 'Katherine  Dunn', 'dunn.jpg');
addItem('book', 'Man\'s Search for Meaning', 'Viktor E. Frankl', 'frankl.jpg');
addItem('book', 'The Magician\'s Nephew', 'C. S. Lewis', 'lewis.jpg');