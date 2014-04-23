app.views.CourseView = Backbone.View.extend({
  render: function () {
    this.$el.html(Handlebars.compile(this.template())(this.model.attributes));
    return this;
  }
});