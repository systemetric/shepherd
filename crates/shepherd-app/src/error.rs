use axum::{http::StatusCode, response::IntoResponse};
use tracing::error;

pub struct ShepherdError(pub StatusCode, pub String);
pub type ShepherdResult<T> = Result<T, ShepherdError>;

impl IntoResponse for ShepherdError {
    fn into_response(self) -> axum::response::Response {
        error!("{}: {}", self.0, self.1);
        (self.0, self.1).into_response()
    }
}

impl From<std::io::Error> for ShepherdError {
    fn from(value: std::io::Error) -> Self {
        ShepherdError(StatusCode::INTERNAL_SERVER_ERROR, value.to_string())
    }
}
