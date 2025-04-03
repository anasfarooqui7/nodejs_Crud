module.exports = (req, res, next) => {
    const { age } = req.body;

    if (!age || age < 18) {
        return res.status(403).send("Access denied: You must be at least 18 years old.");
    }

    next(); // Proceed to the next middleware or controller
};
