$(document).ready(function(){
    var names = [
                    ["Agiliq", 100, "http://agiliq.com/"],
                   ["Flipkart", 90, "http://flipkart.com/"],
                   ["Inmobi", 80, "http://inmobi.com/"],
                   ["Wingify", 70, "http://visualwebsiteoptimiizer.com/"],
                   ["99tests", 80, "http://www.99tests.com/"],
                   ["TCS", 0, "http://tcs.com/"],
                   ["Satyam", 0, "http://satyam.com/"]
                   ];
    var Company = Backbone.Model.extend({             
                        defaults: {
                               name: '',
                               score: 0,
                               website: ''
                        },
                        givePoints: function(){
                            var currentScore = this.get("score")
                            this.set({score: currentScore+5})
                        }
                        
                           });
    var CompanyList = Backbone.View.extend({
        
        template: Handlebars.compile($("#company").html()),
        render: function(){
         this.$el.html(this.template(this.model.toJSON()));
         $("#app").html(this.$el.html());
         return this;
       },
       initialize: function() {
            this.model.bind('change', this.render, this);
            this.render();
          },
       events: {
           "click ": "givePoints"
       },
       givePoints: function(){
           alert(10);
           this.model.givePoints();
       },
       
       
    });
    agiliq = new Company({name: names[0][0], score: names[0][1]});
    agiliq_view = new CompanyList({model: agiliq});
    
    for (var i; i < names.length; i++){
        //var company = new Company({name: names[i][0]});
        //company_view = new CompanyList({model: company});
    }
    
    
});