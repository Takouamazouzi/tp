%%

%class Lexer
%unicode
%function yylex
%type void
%line
%column

%{
    int nombrePersonnes = 0; // Compteur du nombre de personnes
%}

%%

// Ignorer les espaces, tabulations, séparateurs
[\s,;]+  { /* Ignorer */ }

// Reconnaître un prénom : majuscule suivie de lettres minuscules
[A-Z][a-z]+  {
    System.out.println("Prénom : " + yytext());
}

// Reconnaître un nom de famille : lettres majuscules
[A-Z]+  {
    System.out.println("Nom : " + yytext());
}

// Reconnaître un âge (nombre entier ≤ 100)
[0-9]{1,2} | 100  {
    System.out.println("Âge : " + yytext());
    nombrePersonnes++; // Incrémenter le compteur pour chaque personne trouvée
}

// Gestion des autres caractères
.  { /* Ignorer tout autre caractère */ }

<<EOF>> {
    System.out.println("Dans ce fichier il existe " + nombrePersonnes + " personnes.");
}