<?php
if (!defined('BASE_PATH')) exit('Access Denied!');

class Util_DownFile {
	/**
	 * 下载文件
	 *
	 * @param string $sFile 文件名
	 * @param string $sContent 文件内容
	 * @param string $sAlias 文件别名
	 * @param public
	 * @return stream
	 */
	public static function downloadFile($sFile, $sContent = '', $sAlias = '')
	{
		ini_set('memory_limit','1024M');
		set_time_limit(0);
		if ((! strlen($sFile)) && (! strlen($sContent)))
		{
			return;
		}
	
		$s_file_path = __FILE__ . $sFile;
		$b_is_file = FALSE;
		if (is_file($s_file_path))
		{
			$b_is_file = TRUE;
			$i_file_size =@ filesize($s_file_path);
			$s_file_name = substr(strrchr('/' . $sFile, '/'), 1);
			$s_file_ext = strtolower(substr(strrchr($sFile, '.'), 1));
		}
		else
		{
			$i_file_size = strlen($sContent);
			$s_file_name = substr(strrchr('/' . $sFile, '/'), 1);
			$s_file_ext = strtolower(substr(strrchr($sFile, '.'), 1));
		}
	
		$s_file_name = strlen($sAlias) ? $sAlias . '.' . $s_file_ext : $s_file_name;
	
		if (self::file_mime($s_file_ext)){
			$a_file_mime = self::file_mime($s_file_ext);
		}else{
			$a_file_mime = array('application/octet-stream');
		}
		
		//ob_flush();
		flush(); 
		ob_end_clean();
		//set_no_cache();
		
	
		header('Content-Encoding: none');
		header('Content-Transfer-Encoding: binary');
		header('Content-Type: ' . $a_file_mime[0]);
		header('Content-Length: ' . sprintf('%d', $i_file_size));
		header('Content-Disposition: attachment; filename=' . urlencode($s_file_name));
	
		if ($b_is_file)
		{
			$o_file =@ fopen($s_file_path, 'rb');
			@ fpassthru($o_file);
			@ fclose($o_file);
		}
		else
		{
			echo $sContent;
		}
		exit();
	}

	//定义文件MIME类型数组
	public function file_mime($mine) {
		$file_mime = array(
			'323' => array('text/h323'),
			'7z' => array('application/x-7z-compressed'),
			'abw' => array('application/x-abiword'),
			'acx' => array('application/internet-property-stream'),
			'ai' => array('application/postscript'),
			'aif' => array('audio/x-aiff'),
			'aifc' => array('audio/x-aiff'),
			'aiff' => array('audio/x-aiff'),
			'asf' => array('video/x-ms-asf'),
			'asr' => array('video/x-ms-asf'),
			'asx' => array('video/x-ms-asf'),
			'atom' => array('application/atom+xml'),
			'avi' => array('video/avi', 'video/msvideo', 'video/x-msvideo'),
			'bin' => array('application/octet-stream', 'application/macbinary'),
			'bmp' => array('image/bmp'),
			'c' => array('text/x-csrc'),
			'c++' => array('text/x-c++src'),
			'cab' => array('application/x-cab'),
			'cc' => array('text/x-c++src'),
			'cda' => array('application/x-cdf'),
			'class' => array('application/octet-stream'),
			'cpp' => array('text/x-c++src'),
			'cpt' => array('application/mac-compactpro'),
			'csh' => array('text/x-csh'),
			'css' => array('text/css'),
			'csv' => array('text/x-comma-separated-values', 'application/vnd.ms-excel', 'text/comma-separated-values', 'text/csv'),
			'dbk' => array('application/docbook+xml'),
			'dcr' => array('application/x-director'),
			'deb' => array('application/x-debian-package'),
			'diff' => array('text/x-diff'),
			'dir' => array('application/x-director'),
			'divx' => array('video/divx'),
			'dll' => array('application/octet-stream', 'application/x-msdos-program'),
			'dmg' => array('application/x-apple-diskimage'),
			'dms' => array('application/octet-stream'),
			'doc' => array('application/msword'),
			'dvi' => array('application/x-dvi'),
			'dxr' => array('application/x-director'),
			'eml' => array('message/rfc822'),
			'eps' => array('application/postscript'),
			'evy' => array('application/envoy'),
			'exe' => array('application/x-msdos-program', 'application/octet-stream'),
			'fla' => array('application/octet-stream'),
			'flac' => array('application/x-flac'),
			'flc' => array('video/flc'),
			'fli' => array('video/fli'),
			'flv' => array('video/x-flv'),
			'gif' => array('image/gif'),
			'gtar' => array('application/x-gtar'),
			'gz' => array('application/x-gzip'),
			'h' => array('text/x-chdr'),
			'h++' => array('text/x-c++hdr'),
			'hh' => array('text/x-c++hdr'),
			'hpp' => array('text/x-c++hdr'),
			'hqx' => array('application/mac-binhex40'),
			'hs' => array('text/x-haskell'),
			'htm' => array('text/html'),
			'html' => array('text/html'),
			'ico' => array('image/x-icon'),
			'ics' => array('text/calendar'),
			'iii' => array('application/x-iphone'),
			'ins' => array('application/x-internet-signup'),
			'iso' => array('application/x-iso9660-image'),
			'isp' => array('application/x-internet-signup'),
			'jar' => array('application/java-archive'),
			'java' => array('application/x-java-applet'),
			'jpe' => array('image/jpeg', 'image/pjpeg'),
			'jpeg' => array('image/jpeg', 'image/pjpeg'),
			'jpg' => array('image/jpeg', 'image/pjpeg'),
			'js' => array('application/x-javascript'),
			'json' => array('application/json'),
			'latex' => array('application/x-latex'),
			'lha' => array('application/octet-stream'),
			'log' => array('text/plain', 'text/x-log'),
			'lzh' => array('application/octet-stream'),
			'm4a' => array('audio/mpeg'),
			'm4p' => array('video/mp4v-es'),
			'm4v' => array('video/mp4'),
			'man' => array('application/x-troff-man'),
			'mdb' => array('application/x-msaccess'),
			'midi' => array('audio/midi'),
			'mid' => array('audio/midi'),
			'mif' => array('application/vnd.mif'),
			'mka' => array('audio/x-matroska'),
			'mkv' => array('video/x-matroska'),
			'mov' => array('video/quicktime'),
			'movie' => array('video/x-sgi-movie'),
			'mp2' => array('audio/mpeg'),
			'mp3' => array('audio/mpeg'),
			'mp4' => array('application/mp4', 'audio/mp4', 'video/mp4'),
			'mpa' => array('video/mpeg'),
			'mpe' => array('video/mpeg'),
			'mpeg' => array('video/mpeg'),
			'mpg' => array('video/mpeg'),
			'mpg4' => array('video/mp4'),
			'mpga' => array('audio/mpeg'),
			'mpp' => array('application/vnd.ms-project'),
			'mpv' => array('video/x-matroska'),
			'mpv2' => array('video/mpeg'),
			'ms' => array('application/x-troff-ms'),
			'msg' => array('application/msoutlook', 'application/x-msg'),
			'msi' => array('application/x-msi'),
			'nws' => array('message/rfc822'),
			'oda' => array('application/oda'),
			'odb' => array('application/vnd.oasis.opendocument.database'),
			'odc' => array('application/vnd.oasis.opendocument.chart'),
			'odf' => array('application/vnd.oasis.opendocument.forumla'),
			'odg' => array('application/vnd.oasis.opendocument.graphics'),
			'odi' => array('application/vnd.oasis.opendocument.image'),
			'odm' => array('application/vnd.oasis.opendocument.text-master'),
			'odp' => array('application/vnd.oasis.opendocument.presentation'),
			'ods' => array('application/vnd.oasis.opendocument.spreadsheet'),
			'odt' => array('application/vnd.oasis.opendocument.text'),
			'oga' => array('audio/ogg'),
			'ogg' => array('application/ogg'),
			'ogv' => array('video/ogg'),
			'otg' => array('application/vnd.oasis.opendocument.graphics-template'),
			'oth' => array('application/vnd.oasis.opendocument.web'),
			'otp' => array('application/vnd.oasis.opendocument.presentation-template'),
			'ots' => array('application/vnd.oasis.opendocument.spreadsheet-template'),
			'ott' => array('application/vnd.oasis.opendocument.template'),
			'p' => array('text/x-pascal'),
			'pas' => array('text/x-pascal'),
			'patch' => array('text/x-diff'),
			'pbm' => array('image/x-portable-bitmap'),
			'pdf' => array('application/pdf', 'application/x-download'),
			'php' => array('application/x-httpd-php'),
			'php3' => array('application/x-httpd-php'),
			'php4' => array('application/x-httpd-php'),
			'php5' => array('application/x-httpd-php'),
			'phps' => array('application/x-httpd-php-source'),
			'phtml' => array('application/x-httpd-php'),
			'pl' => array('text/x-perl'),
			'pm' => array('text/x-perl'),
			'png' => array('image/png', 'image/x-png'),
			'po' => array('text/x-gettext-translation'),
			'pot' => array('application/vnd.ms-powerpoint'),
			'pps' => array('application/vnd.ms-powerpoint'),
			'ppt' => array('application/powerpoint'),
			'ps' => array('application/postscript'),
			'psd' => array('application/x-photoshop', 'image/x-photoshop'),
			'pub' => array('application/x-mspublisher'),
			'py' => array('text/x-python'),
			'qt' => array('video/quicktime'),
			'ra' => array('audio/x-realaudio'),
			'ram' => array('audio/x-realaudio', 'audio/x-pn-realaudio'),
			'rar' => array('application/rar'),
			'rgb' => array('image/x-rgb'),
			'rm' => array('audio/x-pn-realaudio'),
			'rpm' => array('audio/x-pn-realaudio-plugin', 'application/x-redhat-package-manager'),
			'rss' => array('application/rss+xml'),
			'rtf' => array('text/rtf'),
			'rtx' => array('text/richtext'),
			'rv' => array('video/vnd.rn-realvideo'),
			'sea' => array('application/octet-stream'),
			'sh' => array('text/x-sh'),
			'shtml' => array('text/html'),
			'sit' => array('application/x-stuffit'),
			'smi' => array('application/smil'),
			'smil' => array('application/smil'),
			'so' => array('application/octet-stream'),
			'src' => array('application/x-wais-source'),
			'svg' => array('image/svg+xml'),
			'swf' => array('application/x-shockwave-flash'),
			't' => array('application/x-troff'),
			'tar' => array('application/x-tar'),
			'tcl' => array('text/x-tcl'),
			'tex' => array('application/x-tex'),
			'text' => array('text/plain'),
			'texti' => array('application/x-texinfo'),
			'textinfo' => array('application/x-texinfo'),
			'tgz' => array('application/x-tar'),
			'tif' => array('image/tiff'),
			'tiff' => array('image/tiff'),
			'torrent' => array('application/x-bittorrent'),
			'tr' => array('application/x-troff'),
			'tsv' => array('text/tab-separated-values'),
			'txt' => array('text/plain'),
			'wav' => array('audio/x-wav'),
			'wax' => array('audio/x-ms-wax'),
			'wbxml' => array('application/wbxml'),
			'wm' => array('video/x-ms-wm'),
			'wma' => array('audio/x-ms-wma'),
			'wmd' => array('application/x-ms-wmd'),
			'wmlc' => array('application/wmlc'),
			'wmv' => array('video/x-ms-wmv', 'application/octet-stream'),
			'wmx' => array('video/x-ms-wmx'),
			'wmz' => array('application/x-ms-wmz'),
			'word' => array('application/msword', 'application/octet-stream'),
			'wp5' => array('application/wordperfect5.1'),
			'wpd' => array('application/vnd.wordperfect'),
			'wvx' => array('video/x-ms-wvx'),
			'xbm' => array('image/x-xbitmap'),
			'xcf' => array('image/xcf'),
			'xhtml' => array('application/xhtml+xml'),
			'xht' => array('application/xhtml+xml'),
			'xl' => array('application/excel', 'application/vnd.ms-excel'),
			'xla' => array('application/excel', 'application/vnd.ms-excel'),
			'xlc' => array('application/excel', 'application/vnd.ms-excel'),
			'xlm' => array('application/excel', 'application/vnd.ms-excel'),
			'xls' => array('application/excel', 'application/vnd.ms-excel'),
			'xlt' => array('application/excel', 'application/vnd.ms-excel'),
			'xml' => array('text/xml'),
			'xof' => array('x-world/x-vrml'),
			'xpm' => array('image/x-xpixmap'),
			'xsl' => array('text/xml'),
			'xvid' => array('video/x-xvid'),
			'xwd' => array('image/x-xwindowdump'),
			'z' => array('application/x-compress'),
			'zip' => array('application/x-zip', 'application/zip', 'application/x-zip-compressed'),
		);
		return $file_mime[$mine];
	}
}

?>