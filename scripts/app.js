function QuizViewModel() {
    var self = this;
    self.index = ko.observable(0);
    self.quiz = ko.observableArray([
            {
                question: "Inside which HTML element do we put the JavaScript?",
                answers: ["<javascript>", "<script>", "<js>", "<p>"],
                correctAnswer: "script"
            },
            {
                question: "How can you add a single-line comment in JavaScript?", 
                answers: ["// comments", "<!-- comments -->", "*comment", "*comment*"],
                correctAnswer: "// comments"
            },
            {
                question: "How do you give a variable a value?", 
                answers: ["var Tim", "var named = 'Tim'", "var equals Tim", "var ='Tim'"],
                correctAnswer: "var named = 'Tim'"
            },
            {
                question: "JavaScript types can be broken into what two categories",
                answers: ["Evolved types and normal types", "Script types and object types", "Web types and java types", "Primitive types and object types"],
                correctAnswer: "Primitive types and object types"
            },
            {
                question: "Which of the following is not a JavaScript data type", 
                answers: ["Strings", "Booleans", "Sections", "Numbers"],
                correctAnswer: "Sections",
            },
            {
                question: "What statements are those that bend that path back upon itself to repeat portions of your code?", 
                answers: ["Repeating", "Recurring", "Looping", "Circle"],
                correctAnswer: "Looping",
            },
            {
                question: "A mathematical symbol which produces a result based on two values or variables is what?", 
                answers: ["An operator", "A syntax", "A denominator", "A magnifier"],
                correctAnswer: "An operator",
            },
            {
                question: "What is a block of JavaScript code that is defined once but may be executed, or invoked, any number of times?", 
                answers: ["Invoker", "Function", "Utility", "Link"],
                correctAnswer: "Function",
            },
            {
                question: "The mechanism by which JavaScript objects inherit features from one another.", 
                answers: ["Architypes", "Prototypes", "Booleans", "Aides"],
                correctAnswer: "Prototypes",
            },
            {
                question: "What is an ordered collection of values?", 
                answers: ["An Array", "A Collection", "A Structure", "A Set"],
                correctAnswer: "An Array",
            }
        ]);
        
     
    };
        
     ko.applyBindings(new QuizViewModel());
    
    