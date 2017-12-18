// transcoding-service-output/JWPlayer
TWP = window.TWP || {};
TWP.PostTV = TWP.PostTV || {};
TWP.PostTV.jwPlayerConfig = {
	adLoadWaitTime: 8, // seconds
	editorialPlaybackWaitTime: 5, // seconds
	spinnerWaitTime: 1.0, // seconds
	captionsConfidenceMinimum: 0.75,
	maxBitrates: {
		mobile: {maxBitrate: 300, fallback: 2000},
		tablet: {maxBitrate: 600, fallback: 2000},
		desktop: {
			'.smil': {maxBitrate: 5400},
			maxBitrate: 2000
		}
	},
	streamPreferences: {
		mobile: {
			android: {streamPreference: ['.mp4', '.m4v']},
			streamPreference: ['_mobile.m3u8', '.m3u8', '.mp4', '.m4v']
		},
		tablet: {
			android: {streamPreference: ['.mp4', '.m4v']},
			streamPreference: ['_master.m3u8', '.m3u8', '.mp4', '.m4v']
		},
		desktop: {
//			chrome: {
//				streamPreference: ['.smil', '.mp4', '.m4v']
//			},
			html5: {
				streamPreference: ['.mp4', '.webm', '.m4v']
			},
			streamPreference: ['_master.m3u8', '.m3u8', '.smil', '.mp4', '.m4v']
		}
	},
	httpsToHttp: false, // ((document.cookie.match(/X-WP-Split=([^;]+)/) ? RegExp.$1 : '').toUpperCase() !== 'B'),
	skin: 'bekle-posttv' // possible values: ['bekle', 'bekle-posttv', 'default']
};
