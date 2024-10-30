const { sendResponse } = require('../../responses/index');
const { parseBody } = require('../../helpers/parseBody');

exports.handler = async (event, context) => {
    let text = "";

    try {       
        text = parseBody(event);
    } catch (error) {
        return sendResponse(400, { message: error.message });
    }

    const wordCount = text.split(/\s+/).filter(word => word.length > 0).length;

    return sendResponse(200, { wordCount });
};
