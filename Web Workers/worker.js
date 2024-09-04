self.onmessage = function(e) {
    const num = e.data;
    self.postMessage(fibonacci(num));
};

function fibonacci(n) {
    if (n <= 1) 
        return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
