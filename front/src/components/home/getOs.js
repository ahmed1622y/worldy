function getOS() {
  var userAgent = window.navigator.userAgent,
    platform = window.navigator.platform,
    macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"],
    windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"],
    iosPlatforms = ["iPhone", "iPad", "iPod"];

  if (macosPlatforms.indexOf(platform) !== -1) {
    return false;
  } else if (iosPlatforms.indexOf(platform) !== -1) {
    return true;
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
  } else if (/Android/.test(userAgent)) {
    return true;
  }
  return false;
}
export default getOS;
