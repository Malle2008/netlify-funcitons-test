exports.handler = async event => {
    var subject = event.queryStringParameters.name || "world"

    return {
        statusCode: 200,
        body: `Hello ${subject}`
    }
}