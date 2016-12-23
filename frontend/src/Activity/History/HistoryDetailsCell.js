var vent = require('vent');
var NzbDroneCell = require('Cells/NzbDroneCell');

module.exports = NzbDroneCell.extend({
  className: 'history-details-cell',

  events: {
    'click': '_showDetails'
  },

  render() {
    this.$el.empty();
    this.$el.html('<i class="icon-sonarr-info"></i>');

    return this;
  },

  _showDetails() {
    vent.trigger(vent.Commands.ShowHistoryDetails, { model: this.model });
  }
});