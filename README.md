**This repo is a copy of the original created by David Stockon. Found here: https://bitbucket.org/dstockto/99bottles_php**

This is the PHP version of the 99 bottles of beer exercise using phpspec.

It is not expected for you to complete the class. In fact, after you've 
worked on this problem for about 30 minutes, stop! Just see how far you can
get in 30 minutes.

To use, please clone or download the code. Run `composer install` to install
phpspec and its dependencies.

The exercise simulates TDD, but the tests are already written. Your first test
is that the Bottles class should exist. You can run phpspec from the root
of your project with `vendor/bin/phpspec run`. If you've followed the 
directions and everything worked, this should offer to create the Bottles
class for you. It will be located in the `src` directory in the file 
`Bottles.php`. 

You can also run phpspec from within PHPStorm but it will not do any code
generation. It is nice to use during refactoring though since you won't have 
to leave your IDE.

The standard TDD flow is often referred to as "Red -> Green -> Refactor". What 
this means is that before you write any code, you'll write tests and run them.
This usually will make your tests fail, hence "Red". Your next step is to
write the code you need to get them to pass again. This is not the time to 
rearrange or rethink your code. It's just getting the tests to pass. Once the
tests are all passing then you can refactor. The purpose of this exercise is 
mainly this step as it will help you recognize and learn how to make tiny 
changes to the code that make it better without breaking the tests. Each tiny
step will build together and you'll be able to accomplish large refactoring
this way.

When you make all the tests pass and are satisfied with the refactoring, then
you'd write the next test. In the case of this exercise, they are already 
written, so you only need to uncomment the next test in `spec/BottlesSpec.php`.

Then run the tests. They will probably fail. If they do, write code that makes
them pass. Then refactor. Continue to follow this until you've enabled all 
the tests in `BottleSpec.php`. At this point the really interesting refactoring
can begin.
