- static html ?
- PHP
- Lexikon

Put your static file in the public folder then in your routing section put this:

<Route exact path="/">
   <Redirect push to={"/home.html"} />
</Route>
