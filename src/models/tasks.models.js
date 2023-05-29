class Task {
  constructor(id, name, status, created_at, updated_at) {
    this.id = id;
    this.name = name;
    this.status = status;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}

module.exports = Task;
