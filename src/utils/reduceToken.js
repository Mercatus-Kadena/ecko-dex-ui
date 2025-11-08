const reduceToken = (token) => {
  if (token?.length > 10) return `${token.substring(0, 6)}...${token.substring(token.length - 4, token.length)}`;
  return token;
};

export default reduceToken;
