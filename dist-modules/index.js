'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _reactYoutube = require('react-youtube');

var _reactYoutube2 = _interopRequireDefault(_reactYoutube);

var _getYoutubeId = require('get-youtube-id');

var _getYoutubeId2 = _interopRequireDefault(_getYoutubeId);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var youtubeOptions = {
  width: '100%',
  height: '100%'
};

var SampleCard = function SampleCard(_ref) {
  var cover = _ref.cover;
  var title = _ref.title;
  var subtitle = _ref.subtitle;
  var html = _ref.html;
  var images = _ref.images;
  var videos = _ref.videos;
  return _react2.default.createElement(
    _semanticUiReact.Card,
    { style: { width: '100%' } },
    _react2.default.createElement(_semanticUiReact.Image, { src: cover }),
    _react2.default.createElement(
      _semanticUiReact.Card.Content,
      null,
      _react2.default.createElement(
        _semanticUiReact.Card.Header,
        null,
        title
      ),
      _react2.default.createElement(
        _semanticUiReact.Card.Meta,
        null,
        _react2.default.createElement(
          'span',
          { className: 'date' },
          subtitle
        )
      ),
      _react2.default.createElement(
        _semanticUiReact.Card.Description,
        null,
        _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: html } })
      )
    ),
    _react2.default.createElement(
      _semanticUiReact.Card.Content,
      null,
      _react2.default.createElement(
        _semanticUiReact.Card.Group,
        { itemsPerRow: 2 },
        images.map(function (img) {
          return _react2.default.createElement(_semanticUiReact.Card, { key: img.url, raised: true, image: img.url });
        })
      )
    ),
    _react2.default.createElement(
      _semanticUiReact.Card.Content,
      null,
      _react2.default.createElement(
        _semanticUiReact.Card.Group,
        { itemsPerRow: 1 },
        videos.map(function (vid) {
          return _react2.default.createElement(
            _semanticUiReact.Card,
            { key: vid.url },
            _react2.default.createElement(_reactYoutube2.default, { opts: youtubeOptions, videoId: (0, _getYoutubeId2.default)(vid.url), raised: true })
          );
        })
      )
    )
  );
};

process.env.NODE_ENV !== "production" ? SampleCard.propTypes = {
  images: _react2.default.PropTypes.array,
  videos: _react2.default.PropTypes.array
} : void 0;

SampleCard.defaultProps = {
  images: [],
  videos: []
};

exports.default = SampleCard;