import { RESTDataSource } from 'apollo-datasource-rest';

class TrackAPI extends RESTDataSource {
	constructor() {
		super();
		this.baseURL = 'https://odyssey-lift-off-rest-api.herokuapp.com/';
	}

	getTracksForHome() {
		return this.get('tracks');
	}

	getAuthor(authorId) {
		return this.get(`author/${authorId}`);
	}

	getTrack(trackID) {
		return this.get(`track/${trackID}`);
	}

	getTrackModules(trackID) {
		return this.get(`track/${trackID}/modules`);
	}

	incrementTrackViews(trackID) {
		return this.patch(`track/${trackID}/numberOfViews`);
	}
}

export default TrackAPI;
