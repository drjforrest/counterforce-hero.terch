interface PageHeaderProps {
  title: string
  subtitle: string
}

const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  return (
    <div className="page-header">
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  )
}

export default PageHeader