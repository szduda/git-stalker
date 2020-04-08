import React from 'react'

export default ({ visible, loading, hasData, noDataMessage, children, loadingIndicator, ...rest }) => visible
  ? (
    <div {...rest}>
      {loading && loadingIndicator}
      {hasData
        ? (
          <>{children}</>
        ) : (
          !loading && <p className="noDataMessage">{noDataMessage}</p>
        )}
    </div>
  ) : null