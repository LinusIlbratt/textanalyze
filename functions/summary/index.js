const { sendResponse } = require('../../responses/index');
const { parseBody } = require('../../helpers/parseBody');

exports.handler = async (event, context) => {
    let text = "";

    try {       
        text = parseBody(event);
    } catch (error) {
        return sendResponse(400, { message: error.message });
    }

    // count the words in the text
    const wordCount = text.split(/\s+/).filter(word => word.length > 0).length;

    // create a list with the words
    const wordList = text.split(/\s+/).filter(word => word.length > 0);

    // return word count and the list
    return sendResponse(200, { wordCount, wordList });
};
