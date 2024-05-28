function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "i love typescript"; }
    console.log("making a ".concat(size, " t-shirt with message\"").concat(message, "\" printed on it"));
}
make_shirt();
make_shirt("small", "dive into coding");
make_shirt("medium");
