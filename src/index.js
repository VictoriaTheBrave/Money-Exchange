module.exports = function makeExchange(currency) {
        if (currency <= 10000) {
            if (currency > 0) {
                var result = {};
                let h = Math.floor(currency / 50);
                if (h > 0) {result.H = h};
                let q = Math.floor((currency - (50 * h)) / 25);
                if (q > 0) {result.Q = q};
                let d = Math.floor( (currency - (50 * h) - (25 * q)) / 10);
                if (d > 0) {result.D = d};
                let n = Math.floor( (currency - (50 * h) - (25 * q) - (10 * d)) / 5);
                if (n > 0) {result.N = n};
                let p = currency - (50 * h) - (25 * q) - (10 * d) - (5 * n);
                if (p > 0) {result.P = p};
                return result;
                }
            else { 
                return {};
                }
            }
    else {
        let error = {};
        error.error = "You are rich, my friend! We don't have so much coins for exchange";
        return error;
    }
}