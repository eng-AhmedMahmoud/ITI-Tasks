const { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList, GraphQLNonNull , GraphQLID } = require("graphql");



const AuthorModel = require("../Models/authorModel");
const BookModel = require("../Models/bookModel");

const AuthorType = new GraphQLObjectType({
    name:"AuthorType",
    description:"Author",
    fields:()=>({
        id:{type:GraphQLString},
        name:{type:GraphQLString},
        age:{type:GraphQLInt},
        books:{
            type:new GraphQLList(BookType),
            description:"Get All Books Per Author",
            resolve:async(parent)=>{
                let BooksID = parent.books;
                let FilteredBooks = [];
                let AllBooks = await BookModel.find({})
                for(let i =0; i<BooksID.length;i++){//2
                    for(let j=0; j<AllBooks.length; j++){
                        if(BooksID[i] == AllBooks[j]._id){
                            FilteredBooks.push(AllBooks[j]);
                        }
                    }
                }
                return FilteredBooks;
            }
        }
    })
})

let BookType = new GraphQLObjectType({
    name:"BookType",
    description:"Book",
    fields:()=>({
        id:{type:GraphQLString},
        name:{type:GraphQLString},
        NumOfPages:{type:GraphQLString},
        author:{type:GraphQLString},
    })
})
//#endregion

const rootQuery = new GraphQLObjectType({
    name:"RootQuery",
    description:"Get All Requests",
    fields:()=>({
        authores:{
            type:new GraphQLList(AuthorType), 
            description:"Get All authores",
            resolve:()=>{
               
                return AuthorModel.find({});
            }
        },
        author:{
            type: AuthorType,
            description:"Get One Author / ID",
            args:{
                id: {type: GraphQLString}
            },
            resolve:async(parent, args)=>{
                let foundAuthor = await AuthorModel.findById(args.id) || {};
                return foundAuthor;
            }
        },
        books:{
            type:new GraphQLList(BookType),
            description:"Get All books",
            resolve:async()=>{
                return await BookModel.find({});
            }
        },
        book:{
            type:BookType,
            description:"Get book / ID",
            args:{
                id:{type:GraphQLString}
            },
            resolve:(parent, args)=>{
                return BookModel.findById(args.id);
            }
        }
    })
})

const mutateQuery = new GraphQLObjectType({
    name:"MutationQuery",
    description:"Mutat Ur DB",
    fields:()=>({
        AddAuthor:{
            type: AuthorType,
            description:"Add New Author",
            args:{
                name:{type:new GraphQLNonNull(GraphQLString)},
                age:{type:new GraphQLNonNull(GraphQLInt)},
                books:{type:new GraphQLList(GraphQLString)}
            },
            resolve:(parent, args)=>{
                let newAuthor = new AuthorModel({name:args.name, age:args.age, books:args.books});
                return newAuthor.save();
            }
        },
        AddBook:{
            type: BookType,
            description:"Add New Book",
            args:{
                name:{type:new GraphQLNonNull(GraphQLString)},
                author:{type:new GraphQLNonNull(GraphQLString)},
                NumOfPages:{type:new GraphQLNonNull(GraphQLString)}
            },
            resolve:(parent, args)=>{
                let newBook = new BookModel({name:args.name, author:args.author, NumOfPages:args.NumOfPages});
                return newBook.save();
            }
        },
        UpdateAuthor:{
            type: AuthorType,
            description:"Update  Author",
            args:{
                id:{type:new GraphQLNonNull(GraphQLString)},
                name:{type:new GraphQLNonNull(GraphQLString)},
                age:{type:new GraphQLNonNull(GraphQLInt)},
                books:{type:new GraphQLList(GraphQLString)}
            },
            resolve:async(parent, args)=>{
                await AuthorModel.findByIdAndUpdate(args.id,{name:args.name, age:args.age, books:args.books})

                //let newAuthor = new AuthorModel({name:args.name, age:args.age, books:args.books});
                //return newAuthor.save();
                return 'updated'
            }
        },
        UpdateBook:{
            type: BookType,
            description:"Update  Book",
            args:{
                id:{type:new GraphQLNonNull(GraphQLString)},
                name:{type:new GraphQLNonNull(GraphQLString)},
                author:{type:new GraphQLNonNull(GraphQLString)},
                NumOfPages:{type:new GraphQLNonNull(GraphQLString)},
            },
            resolve:async(parent, args)=>{
                await BookModel.findByIdAndUpdate(args.id,{name:args.name, author:args.author, NumOfPages:args.NumOfPages})

                //let newAuthor = new AuthorModel({name:args.name, age:args.age, books:args.books});
                //return newAuthor.save();
                return 'updated'
            }
        },
       deleteAuthor:{
            type: AuthorType,
            description:"delete Author",
            args:{
                id:{type:new GraphQLNonNull(GraphQLString)},
            },
            resolve:async(parent, args)=>{
                await AuthorModel.findByIdAndDelete( args.id )
                return 'deleted'
            }
        },
        deleteBook:{
            type: BookType,
            description:"delete Book",
            args:{
                id:{type:new GraphQLNonNull(GraphQLID)},
            },
            resolve:async(parent, args)=>{
                 await BookModel.findByIdAndDelete( args.id )
                return 'deleted'
            }
        },
    })
})

const schema = new GraphQLSchema({
    query: rootQuery,
    mutation: mutateQuery
})


module.exports = schema;


//Get ALL Subscribed Students per Course ///----------->
//MongoDB
//Getting Only query[GET] || Mutation[POST - PUT- DELETE]

//Front [Client] [React]