Fluxo de camadas

router -> controller -> service -> repository -> service -> controller -> router

Controller -> Responsável por qualquer regra de negócio
middleware -> Responsável pelas validações
Service -> Trata e formata os dados ou faz algum tratamento
Repository -> Acessa diretamente o banco de dados (camada mais baixa)

```sql
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'nova_senha';
FLUSH PRIVILEGES;
```

```sql
CREATE TABLE tasks (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  status ENUM('pendente', 'em andamento', 'concluída') NOT NULL DEFAULT 'pendente',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```
