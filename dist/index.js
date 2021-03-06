'use strict';

module.exports = {
    config: require('./utils/request').config,
    getPopularVideo: require('./lib/getPopularVideo'),
    getBestReviews: require('./lib/getBestReviews'),
    getMostFavStars: require('./lib/getMostFavStars'),
    getNewComments: require('./lib/getNewComments'),
    getNewReleases: require('./lib/getNewReleases'),
    getNewEntries: require('./lib/getNewEntries'),
    getMostWanted: require('./lib/getMostWanted'),
    getBestRated: require('./lib/getBestRated'),
    getVideoDetail: require('./lib/getVideoDetail'),
    getVideoComments: require('./lib/getVideoComments'),
    getVideoReviews: require('./lib/getVideoReviews'),
    listByStar: require('./lib/listByStar'),
    listByDirector: require('./lib/listByDirector'),
    listByTag: require('./lib/listByTag'),
    listByMaker: require('./lib/listByMaker'),
    listByLabel: require('./lib/listByLabel'),
    search: require('./lib/search'),
    user: require('./lib/user')
};