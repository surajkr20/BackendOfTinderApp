
const AdminAuth = (req, res, next) => {
    console.log('Admin authorization is being checked');

    const token = 'suraj';  // You can replace this with actual token handling logic
    const adminAuthorized = token === 'suraj';

    if (!adminAuthorized) {
        res.status(403).send("Sorry, you are unauthorized! Please get back.");
    } else {
        // If authorized, proceed to the next middleware/route handler
        next();
    }
};
const UserAuth = (req, res, next) => {
    console.log('User authorization is being checked');

    const token = 'surajaa';  // You can replace this with actual token handling logic
    const adminAuthorized = token === 'suraj';

    if (!adminAuthorized) {
        res.status(403).send("Sorry, you are unauthorized! Please get back.");
    } else {
        // If authorized, proceed to the next middleware/route handler
        next();
    }
};

module.exports = {
    AdminAuth,
    UserAuth
}