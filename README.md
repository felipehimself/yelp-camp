### Yelp Camp Project

**Este projeto foi desenvolvido com:**

* React (npx create react app);
* React Router;
* Plain CSS para estilização;
* Auth0;

**Principais Métodos utilizados**

* Filter;
* Map;
* Object.keys;
* Slice;
* charAt;

**Hooks utilizados**

* useState;
* useLocation;
* useParams;
* useEffect;
* useContext;
* Custom Hook useGlobalContext);

#### **Descrição**

**O projeto foi divido em 4 componentes:**

* `<Camp />`
* `<CampComments />`
* `<CommentField />`
* `<Error />`
* `<Navbar />`
* `<PrivateRoute />`
* `<Welcome />`

**O projeto possui 5 páginas:**

* `<Add />`
* `<Error />`
* `<Home />`
* `<SignIn />`
* `<SingleCamp />`

A página `<SignIn />` redireciona o usuário para a página inicial de login, que deve ser feito após cadastro no Auth0. Após o login o usuário é direcionado para a página `<Home />`, na qual é possível visualizar todos os camps cadastrados. Ao clicar em um camp, o usuário é redirecionado para a página  `<SingleCamp />`, que mostra detalhes do camp, como localização (foi utilizada uma imagem de mapa padrão, apenas para agilizar o desenvolvimento do projeto) e comentários. O usuário também pode efetuar comentários.

De volta à página inicial, no campo input também é possível buscar por um camp (como se tem poucos dados, apenas como forma de deixar a resposta com mais conteúdos, o método utilizado realiza um filtro baseado na primeira letra da busca). Logo abaixo do botão de pesquisa, também é possível adicionar um próprio camp, e o usuário será direcionado para  página de cadastro. 

Os dados são persistidos utilizando o  `localStorage`, então, os novos comentários e novos camps cadastrados continuarão aparecendo na tela.

Os campos da seção de comentário e adicionar camp possuem validação dos campos preenchidos, e caso o usuário deixe algum em branco, é mostrada uma mensagem de erro que desaparece após 2,3s.

O mock-up utilizado foi parcialmente inspirado no desafio disponibilizado no site www.codewell.cc . 

# yelp-camp
# yelp-camp
# yelp-camp
