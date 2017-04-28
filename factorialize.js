function factorialize(n) {
	if(n <= 1) {
		return 1;
	};
	else {
	return (n * factorialize(n-1));
	};
};