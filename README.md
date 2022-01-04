# **Sentiment Analysis**

With the help of NLP libraries this project allows you to analyze a block of text and return the sentiment score in the form of emoji.

# **Packages Used**

-   "express": for setting up the server

## **Manual Process**

-   "apos-to-lex-form":Convert contractions to standard lexicon
-   "natural": Tokenize words from sentence, Stemming and Sentiment Analysis
-   "sentiment": Sentiment Analysis from tokenized string.
-   "spelling-corrector": Correcting misspelled words.
-   "multilang-sentiment": Apply sentiment analysis for multiple languages.
-   "stopword": Removing stop words.

## **Pre-Trained Model**

-   "ml-sentiment": Trained Model for Sentiment Analysis

# **Algorithm**

1. Convert words in the sentence like _I'm_ to _I am_.
2. Change the converted string to lower case.
3. Remove non-alphabet and special characters _(!, @, .)_.
4. Correct misspelled words.
5. Remove stop words _(but, what,...)_
6. Stemming _gave, giving_ -> _give_
7. Polarity to words: _good: 3 & bad: -3_
8. Send emoji based on the average score.
