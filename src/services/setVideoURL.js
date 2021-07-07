const setVideoURL = (url, callback) => {
  const newURL = url.replace('watch?v=', 'embed/');
  callback(newURL);
};

export default setVideoURL;
